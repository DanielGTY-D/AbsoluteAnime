import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "./_DropDownMenu.scss";
import useAnime from "../../../hook/useAnime";
import { useAppStore } from "../../../store/useAppStore";
function DropDownMenu() {
  const { fetchAnimeGenres } = useAnime();
  const genresList = useAppStore((state) => state.genresList);
  const handleClick = () => {
    if (genresList.length) return;
    fetchAnimeGenres();
  };
  return (
    <Menu>
      <MenuButton className={"menu__button"} onClick={handleClick}>
        Genres
      </MenuButton>
      <MenuItems anchor="bottom" className={"menu__list"}>
        {genresList.length ? (
          <>
            {genresList.map((genre) => (
              <MenuItem key={genre.mal_id}>
                <a>{genre.name}</a>
              </MenuItem>
            ))}
          </>
        ) : (
          <></>
        )}
      </MenuItems>
    </Menu>
  );
}

export default DropDownMenu;

