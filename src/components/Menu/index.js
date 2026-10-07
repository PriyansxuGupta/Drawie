import { ArrowDownCircle, Eraser, Pencil, Redo, Undo } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slices/menuSlice";
import { MENU_ITEMS } from "@/constants";

export default function Menu() {
  const activeMenuItem = useSelector((store) => store.menu.activeMenuItem);
  const dispatch = useDispatch();

  const handleClick = (menuItem) => {
    dispatch(menuItemClick(menuItem));
  };

  const handleActionItemClick = (actionItem) => {
    dispatch(actionItemClick(actionItem));
  };

  const btnClass = (isActive) =>
    `cursor-pointer flex justify-center items-center h-9 w-9 rounded-lg transition-all duration-200 ${
      isActive ? "bg-text2 shadow-md scale-105" : "hover:bg-white/10 hover:scale-105"
    }`;

  return (
    <nav
      className="absolute z-50 px-3 py-2 flex items-center gap-2 left-1/2 top-4 -translate-x-1/2 rounded-2xl border border-white/10 bg-background1/80 backdrop-blur-md shadow-xl"
      aria-label="Drawing tools"
    >
      <button
        className={btnClass(activeMenuItem === MENU_ITEMS.PENCIL)}
        onClick={() => handleClick(MENU_ITEMS.PENCIL)}
        aria-label="Pencil"
        title="Pencil"
      >
        <Pencil className="text-text1" size={18} strokeWidth={2} />
      </button>

      <button
        className={btnClass(activeMenuItem === MENU_ITEMS.ERASER)}
        onClick={() => handleClick(MENU_ITEMS.ERASER)}
        aria-label="Eraser"
        title="Eraser"
      >
        <Eraser className="text-text1" size={18} strokeWidth={2} />
      </button>

      <div className="w-px h-5 bg-white/10 mx-0.5" />

      <button
        className={btnClass(false)}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
        aria-label="Undo"
        title="Undo"
      >
        <Undo className="text-text1" size={18} strokeWidth={2} />
      </button>

      <button
        className={btnClass(false)}
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
        aria-label="Redo"
        title="Redo"
      >
        <Redo className="text-text1" size={18} strokeWidth={2} />
      </button>

      <button
        className={btnClass(false)}
        onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
        aria-label="Download"
        title="Download"
      >
        <ArrowDownCircle className="text-text1" size={18} strokeWidth={2} />
      </button>
    </nav>
  );
}
