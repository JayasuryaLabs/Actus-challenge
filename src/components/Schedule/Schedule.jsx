import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import './Schedule.css';

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weekData = {
    1: [
      { date: 'Mon, Sept 3rd', time: 'timeslot 1', event: 'event description 1' },
      { date: 'Tue, Sept 4th', time: 'timeslot 1', event: 'event description 1' },
      { date: 'Wed, Sept 5th', time: 'timeslot 1', event: 'event description 1' },
    ],
    2: [
      { date: 'Mon, Sept 9th', time: 'timeslot 2', event: 'event description 2' },
      { date: 'Tue, Sept 10th', time: 'timeslot 2', event: 'event description 2' },
      { date: 'Wed, Sept 11th', time: 'timeslot 2', event: 'event description 2' },
    ],
    3: [
      { date: 'Mon, Sept 16th', time: 'timeslot 3', event: 'event description 3' },
    ],
    4: [
      { date: 'Mon, Sept 23rd', time: 'timeslot 4', event: 'event description 4' },
    ],
  };

  const data = useMemo(() => weekData[selectedWeek] || [], [selectedWeek, weekData]);

  const columns = useMemo(
    () => [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'Event', accessor: 'event' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <h2 className="table-heading">Challenge Schedule</h2>
      <div className="weeks">
        <button onClick={() => setSelectedWeek(1)}>Week 1</button>
        <button onClick={() => setSelectedWeek(2)}>Week 2</button>
        <button onClick={() => setSelectedWeek(3)}>Week 3</button>
        <button onClick={() => setSelectedWeek(4)}>Week 4</button>
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
