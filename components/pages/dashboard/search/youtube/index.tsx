import Pagination from "components/general/pagination";
import Table from "components/general/table";
import styles from "./styles.module.scss";
import {
  useChannels,
  useCountries,
  useCategories,
} from "components/_context/youtube";
import Dropdown from "components/general/dropdown";
import Tab from "components/general/tab";
import SearchBox from "components/general/searchbox";
import Loader from "components/general/loader";

export default function YoutubeTable() {
  const {
    channels,
    setOffset,
    setCategory,
    offset,
    setLocation,
    loading,
    total,
    searchText,
    setSearchText,
  } = useChannels();
  const { countries } = useCountries();
  const { categories } = useCategories();

  return (
    <div className={styles.container__element_inner}>
      <Tab />
      <div className={styles.filterContainer}>
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <div className={styles.filterItems}>
          <Dropdown
            title="Category"
            setItem={setCategory}
            setOffset={setOffset}
            items={categories}
            isSearch={true}
          />

          <Dropdown
            title="Countries"
            setItem={setLocation}
            setOffset={setOffset}
            items={countries}
            isSearch={true}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.container__table}>
            {channels?.length > 0 && <Table items={channels} />}
            {channels?.length === 0 && <div>No Data Found</div>}
            {loading && <Loader width="100%" height="100%" />}
          </div>
          <div className={styles.container__pagination}>
            <Pagination total={total} setOffset={setOffset} offset={offset} />
          </div>
        </div>
      </div>
    </div>
  );
}
