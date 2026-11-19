// One error type for every failed request: HTTP errors, network failures and invalid responses.
export class ApiError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }

  get isClientError() {
    return this.status >= 400 && this.status < 500;
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;
