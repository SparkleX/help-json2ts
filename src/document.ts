/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Document {
  $schema?: string;
  DocEntry?: number;
  CardCode: string;
  /**
   * Document Total
   */
  DocTotal?: number;
  Lines?: DocumentDetail[];
}
export interface DocumentDetail {
  $schema?: string;
  LineNum?: number;
  ItemCode?: string;
  LineTotal?: number;
}
