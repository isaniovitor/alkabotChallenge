import { useState, useEffect } from "react";
import Post from "../post";
import * as S from './styles';

// component link: https://www.npmjs.com/package/react-paginate

interface ItemsState {
  currentItems: any,
}

interface PaginatedItemsState {
  itemsPerPage: number,
  items: any,
}

function Items({ currentItems }: ItemsState) {
  return (
    <S.Items>
      {currentItems && currentItems.map((item: any) => (
        <Post post={item} key={item.id}/>
      ))}
    </S.Items>
  );
}

function PaginatedItems({ itemsPerPage, items }: PaginatedItemsState) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState<number>(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    setItemOffset(newOffset);

    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <S.Container>
      <Items currentItems={currentItems} />
      <S.ReactPaginateComponent
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </S.Container>
  );
}

export default PaginatedItems;
