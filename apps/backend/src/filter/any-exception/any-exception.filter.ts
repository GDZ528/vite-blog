/**
 * 捕获所有异常
 */
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { loggerWithPublic } from "../../utils";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly serviceType: ServiceType) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const logFormat = `Request original url: ${request.originalUrl}
  Method: ${request.method}
  IP: ${request.ip}
  Status code: ${status}
  Response: ${exception}`;

    loggerWithPublic(this.serviceType, "error", logFormat);

    response.status(status).json({
      statusCode: status,
      message: `Service Error: ${exception}`,
    });
  }
}
