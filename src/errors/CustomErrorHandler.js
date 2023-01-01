export class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();

    this.status = status;
    this.message = message;
  }

  getErrorInfo() {
    if (!this.status || !this.message) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }

    return {
      status: this.status,
      message: this.message,
    };
  }
}
