import { Sort } from '@/ui/data/sort/types/Sort';

import { ViewSort } from '../types/ViewSort';

export const viewSortsToSorts = (viewSorts: ViewSort[]): Sort[] => {
  return viewSorts.map((viewSort) => {
    return {
      fieldId: viewSort.fieldId,
      direction: viewSort.direction,
      definition: viewSort.definition,
    };
  });
};
