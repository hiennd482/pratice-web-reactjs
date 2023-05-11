import React from "react";
import "./checkbox.scss";
const Checkbox = () => {
  return (
    <div className="m-3">
      {/* <div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck"
            class="checkbox1"
            name="check"
          />
          <label for="squaredcheck">
            <span>Checkbox Blue Color</span>
          </label>
        </div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck2"
            class="checkbox2"
            name="check"
          />
          <label for="squaredcheck2">
            <span>Checkbox Green Color</span>
          </label>
        </div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck3"
            class="checkbox3"
            name="check"
          />
          <label for="squaredcheck3">
            <span>Checkbox Violet Color</span>
          </label>
        </div>
      </div> */}

      <div className="grid gird-cols-1 gap-3">
        <label className="inline-flex lb">
          <input type="checkbox" />

          <div className="slider"></div>
          <span>sdf</span>
        </label>
      </div>

      <div className="grid gird-cols-1 gap-3">
        <label className="inline-flex ">
          <input
            id="cb1"
            type="checkbox"
            class="focus:ring-red-500 w-6 h-7 cbb"
          />

          <span>sdf</span>
        </label>
      </div>

      <div class="flex items-center mb-4">
        <input
          //   className="default-checkbox"
          id="cb2"
          type="checkbox"
          value=""
          //   className="w-7 h-7  rounded bg-[green] text-lime-400   outline-1  outline-[red] outline"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default checkbox
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="cb3"
          type="checkbox"
          value=""
          //   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
