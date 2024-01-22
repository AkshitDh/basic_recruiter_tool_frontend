export default function SortButton() {
  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        className="bg-none rounded-lg inline-flex items-center w-7 ml-2"
        type="button"
      >
        <img
          src={require("../images/sort_button.png")}
          alt="sort"
          className="object-cover"
        />
      </button>
    </>
  );
}
