import { ObjectId } from "mongodb";

export interface Translation {
  _id?: ObjectId;
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  type: 'text' | 'document' | 'speech';
  fileName?: string;
  createdAt: Date;
  userId?: string;
}

export interface TranslationCreate {
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  type: 'text' | 'document' | 'speech';
  fileName?: string;
  userId?: string;
} 