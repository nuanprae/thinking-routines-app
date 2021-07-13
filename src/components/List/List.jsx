import PropTypes from 'prop-types';

import Card from '../Card/Card';

import './list.css';

import useHandleDelete from '../../hooks/useHandleDelete';

export default function List({
  apiEndPointToDeleteData,
  apiEndPointToFetchData,
  backgroundColor,
  list,
  setList,
}) {
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
            backgroundColor={backgroundColor}
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

List.propTypes = {
  apiEndPointToDeleteData: PropTypes.string,
  apiEndPointToFetchData: PropTypes.string,
  backgroundColor: PropTypes.string,
  list: PropTypes.array,
  setList: PropTypes.func,
};
