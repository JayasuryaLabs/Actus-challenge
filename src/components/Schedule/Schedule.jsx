import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import './Schedule.css';

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weekData = {
    1: [
      { date: 'Thu, May 30th', time: '5:30 pm BST', event: 'Launch Event' },
      { date: 'Thu, May 30th', time: '6:00 pm BST', event: 'Beginner Workshop: Getting Started with AI on Starknet' },
      { date: 'Mon, June 3rd', time: '9:00 am BST', event: 'Filecoin & AI Trust' },
    ],
    2: [
      { date: 'Mon, June 10th', time: '4:00 pm BST', event: 'Onchain Agents with Spectral Syntax' },
      { date: 'Tue, June 11th', time: '4:00 pm BST', event: 'Deploying & Interacting With Smart Contracts on Citrea' },
      { date: 'Whole Week', time: '', event: 'Workshops!' },
    ],
    3: [
      { date: 'Mon, June 17th', time: '10:00 am BST', event: 'Advanced AI Techniques' },
      { date: 'Wed, June 19th', time: '2:00 pm BST', event: 'Blockchain Development' },
    ],
    4: [
      { date: 'Mon, June 24th', time: '1:00 pm BST', event: 'Hackathon Finale' },
      { date: 'Fri, June 28th', time: '3:00 pm BST', event: 'Award Ceremony' },
    ],
  };

  const data = useMemo(() => weekData[selectedWeek], [selectedWeek]);

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
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
