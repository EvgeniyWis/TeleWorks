import { LocalStorageKeys } from "@/shared/const/app";
import { UseLocalStorageTypes } from "./UseLocalStorage_types";

/**
 * Хук, который использует LocalStorage для хранения и обработки данных
 * @param type - тип обращения к LocalStorage
 * @param key - ключ LocalStorage
 * @param value - опционально. Передаваемое значение, которое надо поместить в LocalStorage
 */

export const UseLocalStorage = (
  type: UseLocalStorageTypes,
  key: LocalStorageKeys,
  value?: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): boolean | any => {
  if (type == UseLocalStorageTypes.UPDATE) {
    localStorage.setItem(key as unknown as string, JSON.stringify(value));
  } else if (type == UseLocalStorageTypes.GET) {
    const LocalStorageItem: string | null = localStorage.getItem(
      key as unknown as string,
    );

    if (LocalStorageItem && LocalStorageItem !== "undefined") {
      const LocalStorageParsedItem = JSON.parse(LocalStorageItem);

      return LocalStorageParsedItem;
    } else {
      return false;
    }
  } else if (type == UseLocalStorageTypes.DELETE) {
    localStorage.removeItem(key as unknown as string);
  }

  return true;
};
