export * from './table.types';
export * from './row.types';
export * from './col.types';

import InternalTable from './table';
import TableRow from './row';
import TableCol from './col';

const Table = InternalTable as typeof InternalTable & {
  Row: typeof TableRow;
  Col: typeof TableCol;
};
Table.Row = TableRow;
Table.Col = TableCol;

export default Table;
