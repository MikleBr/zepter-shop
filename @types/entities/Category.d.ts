import { BaseEntity } from './BaseEntity';

export type Category = BaseEntity & {
  title: string;
  descriptionTitle?: string;
  descriptionText?: string;
  image?: string;
  group: string;
};
