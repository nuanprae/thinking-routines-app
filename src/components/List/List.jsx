import useHandleDelete from '../../hooks/useHandleDelete';

import Card from '../Card/Card';

import './list.css';

export default function List({ apiEndPointToDeleteData, apiEndPointToFetchData, list, setList }) {
  const { handleDelete } = useHandleDelete(
    apiEndPointToDeleteData,
    apiEndPointToFetchData,
    setList,
  );

  return (
    <ul className="list__list">
      {list?.map((item) => {
        return (
          <Card
            item={item}
            key={item.id}
            onClick={() => {
              handleDelete(item.id);
            }}
          />
        );
      })}
    </ul>
  );
}
