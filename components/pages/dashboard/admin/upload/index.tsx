import React, { useState, useEffect } from 'react';
import Modal from 'components/general/modal';
import { Filter, CloseLite, Reset } from 'components/_icons';
import {
  Pagination,
  Table,
  Dropdown,
  Tab,
  SearchBox,
  Loader,
  Slider,
  CsvDrop
} from 'components/general';
import { UsersTableEnum } from 'components/utils/enum';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useAllUsers } from 'components/_context/user/all-users';

import { adminNavElements } from 'components/utils/resolver/navigation/tab';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const { getAllUsers, loading: loadingAllUsers } = useAllUsers();
  let [modalIsOpen, setIsOpen] = useState(false);
  let [searchText, setSearchText] = useState();

  return (
    <>
      <div className={styles.container__element_inner}>
        {currentUser?.accessRole === 'Admin' ? (
          <>
            <Tab items={adminNavElements} />
            <div className={styles.filterContainer}>
              <div className={styles.container}>
                <CsvDrop />
              </div>
            </div>
          </>
        ) : (
          <div>Please contact to get admin access!</div>
        )}
      </div>

      {/* filter modal */}
      <Modal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className={styles.edit_filters}>
          <div className={styles.search_wrap}>
            {/* <SearchBox searchText={searchText} setSearchText={setSearchText} /> */}
            <button className={`${styles.reset_form} ${styles.reset_form_modal}`}>
              <Reset />
            </button>
          </div>
          <h3>Edit Filters</h3>
          {/* <div className={styles.filterItems}>
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
          </div> */}
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
