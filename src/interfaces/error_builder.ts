export interface ErrorCategory {
  unique_code:string;
  description:string;
}

export interface ErrorContent {
  status_code:number;
  error_code:number;
  description?:string;
}

export interface Errors {
  [key:string]:ErrorContent;
}

export interface ErrorThrower {
  () : ErrorContent;
}

export declare type ErrorTempalte<T> = {
  [key in keyof T] : ErrorContent;
};

export interface Builder<T extends Errors> {
  (category:ErrorCategory, errors:T) : { [key in keyof T]:ErrorThrower };
}