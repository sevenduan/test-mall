import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './index.less';
import { InputItem, Button } from 'antd-mobile';
import { history } from 'umi';

interface SearchInputProps {
  queryList: Function;
}
const SearchInput: React.FC<SearchInputProps> = (props) => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [input, setInput] = useState<string>('');

  const inputChange = useCallback((val: string) => {
    setInput(val);
  }, []);

  const [searchMode, setSearchMode] = useState<boolean>(false);
  const handle = useCallback(() => {
    if (searchMode) {
      // Search
      const val = input.trim();
      console.log('Search:', val); //sy-log
      props.queryList({ searchKey: val, pageNo: 0 });
    } else {
      history.push('/');
    }
  }, [searchMode, input]);

  useEffect(() => {
    const val = input.trim();
    setSearchMode(val !== '');
  }, [input]);
  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={input}
        onChange={inputChange}
        clear
        className={styles.searchBar}
      />
      <Button
        type="primary"
        onClick={handle}
        className={styles.btn}
        disabled={false}
      >
        {searchMode ? 'Search' : 'Cancel'}
      </Button>
    </div>
  );
};
export default SearchInput;
