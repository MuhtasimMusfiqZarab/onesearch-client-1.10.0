import React, { useState } from "react";
import Modal from "react-modal";
import { Filter, CloseLite, Reset } from "components/_icons";
import {
  Pagination,
  Table,
  Dropdown,
  Tab,
  SearchBox,
  Loader,
} from "components/general";
import styles from "./styles.module.scss";
import {
  useChannels,
  useCountries,
  useCategories,
} from "components/_context/youtube";

export default function Index() {
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
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.container__element_inner}>
        <Tab />
        <div className={styles.filterContainer}>
          <div className={styles.filterContainer_inner}>
            <div className={styles.search_wrap}>
              <SearchBox searchText={searchText} setSearchText={setSearchText} />

              <button onClick={openModal} className={styles.reset_form}>
                <Reset />
                Reset
              </button>

              <button onClick={openModal} className={styles.filtersToggle}>
                <Filter />
              </button>
            </div>

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

      {/* filter modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filters Modal"
      >
        <button onClick={closeModal} className="modal_close_btn">
          <CloseLite />
        </button>
        <div className={styles.edit_filters}>
          <div className={styles.search_wrap}>
            <SearchBox searchText={searchText} setSearchText={setSearchText} />
            <button
              onClick={openModal}
              className={`${styles.reset_form} ${styles.reset_form_modal}`}
            >
              <Reset />
            </button>
          </div>
          <h3>Edit Filters</h3>
          <div className={styles.filterItems}>
            <Dropdown
              title="Category"
              setItem={setCategory}
              setOffset={setOffset}
              items={categories}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Countries"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Year"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />

            <Dropdown
              title="Subscriber"
              setItem={setLocation}
              setOffset={setOffset}
              items={countries}
              isSearch={true}
              isInline={true}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn_fill_secondary">
              Apply Filter
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
