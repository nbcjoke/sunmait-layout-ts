import { useState } from "react";

import { navigationItems } from "../../../mocks/navigationItems";
import { NavigationModel } from "../../../models/navigationModel";

import menu from "../../../assets/icons/menu.svg";
import styles from "./style.module.css";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const [navigation, setNavigation] =
    useState<NavigationModel[]>(navigationItems);

  const openNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const toggleExpanded = (expandedItem: NavigationModel) => {
    const updatedNavigation = navigation.map((item) => {
      if (item.id === expandedItem.id) {
        return { ...item, expanded: !item.expanded };
      }

      return { ...item, expanded: false };
    });

    setNavigation(updatedNavigation);
  };

  return (
    <>
      {open && (
        <div className={styles.sidenav} style={open ? { height: "100%" } : {}}>
          <p className={styles.closebtn} onClick={closeNav}>
            &times;
          </p>
          <div className={styles["sidenav-navigation"]}>
            {navigation.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${styles["navigation-item"]} ${
                    item.expanded ? styles["expanded"] : ""
                  }`}
                >
                  <a href={item.link} onClick={() => toggleExpanded(item)}>
                    {item.label}
                  </a>

                  <div className={styles.nested}>
                    {item.children?.map((child) => {
                      return (
                        <a key={child.id} href={child.link}>
                          {child.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className={styles.menu} onClick={openNav}>
        <img src={menu} alt="menu" />
      </div>
    </>
  );
};
