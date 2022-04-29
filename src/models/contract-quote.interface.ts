/**
 *Котировка
 *
 * @export
 * @interface Quoute
 */
export interface Quoute {
  price: number;
  volume:number;
}

/**
 *котировка контракта
 *
 * @export
 * @interface Quote
 */
export interface ContractQuote {
  contractId: string;
  quote: Quoute;
}
