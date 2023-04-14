export * from './list.types';
export * from './item.types';

import InternalList from './list';
import ListItem from './item';

const List = InternalList as typeof InternalList & {
  Item: typeof ListItem;
};
List.Item = ListItem;

export default List;
