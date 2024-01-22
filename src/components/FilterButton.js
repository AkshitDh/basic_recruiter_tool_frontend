export default function FilterButton() {
  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        className="bg-none rounded-lg inline-flex items-center w-7"
        type="button"
      >
        <img
          src={require("../images/filter_button.png")}
          alt="filter"
          className="object-cover"
        />
      </button>
    </>
  );
}
