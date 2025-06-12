import { DateValue } from "@mantine/dates";
import { useState } from "react";
import { PylonDatePicker } from "../../../widgets/form/date-picker/date-picker";

export const SampleDatepickerMantine: React.FC = () => {
  const [value, setValue] = useState<DateValue>();
  return (
    <PylonDatePicker
      value={value}
      onChange={(value) => setValue(value)}
      label="Appointment date"
      description="mm/dd/yyyy"
    />
  );
};

export const SampleDatepickerUswds: React.FC = () => {
  return (
    <div>
      <div className="usa-form-group">
        <label
          className="usa-label"
          id="appointment-date-label"
          htmlFor="appointment-date"
        >
          Appointment date
        </label>
        <div className="usa-hint" id="appointment-date-hint">
          mm/dd/yyyy
        </div>
        <div
          className="usa-date-picker usa-date-picker--initialized"
          data-min-date="0000-01-01"
        >
          <input
            className="usa-input usa-date-picker__internal-input"
            aria-labelledby="appointment-date-label"
            aria-describedby="appointment-date-hint"
            aria-hidden="true"
            tabIndex={-1}
            style={{ display: "none" }}
          />
          <div className="usa-date-picker__wrapper">
            <input
              className="usa-input usa-date-picker__external-input"
              id="appointment-date"
              name="appointment-date"
              aria-labelledby="appointment-date-label"
              aria-describedby="appointment-date-hint"
              type="text"
            />
            <button
              type="button"
              className="usa-date-picker__button"
              aria-haspopup="true"
              aria-label="Toggle calendar"
            ></button>
            <div
              className="usa-date-picker__calendar"
              role="application"
              data-value="2025-03-21"
              style={{ top: "48px" }}
            >
              <div
                tabIndex={-1}
                className="usa-date-picker__calendar__date-picker"
              >
                <div className="usa-date-picker__calendar__row">
                  <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                    <button
                      type="button"
                      className="usa-date-picker__calendar__previous-year"
                      aria-label="Navigate back one year"
                    ></button>
                  </div>
                  <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                    <button
                      type="button"
                      className="usa-date-picker__calendar__previous-month"
                      aria-label="Navigate back one month"
                    ></button>
                  </div>
                  <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__month-label">
                    <button
                      type="button"
                      className="usa-date-picker__calendar__month-selection"
                      aria-label="March. Select month"
                    >
                      March
                    </button>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__year-selection"
                      aria-label="2025. Select year"
                    >
                      2025
                    </button>
                  </div>
                  <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                    <button
                      type="button"
                      className="usa-date-picker__calendar__next-month"
                      aria-label="Navigate forward one month"
                    ></button>
                  </div>
                  <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                    <button
                      type="button"
                      className="usa-date-picker__calendar__next-year"
                      aria-label="Navigate forward one year"
                    ></button>
                  </div>
                </div>
                <table className="usa-date-picker__calendar__table">
                  <thead>
                    <tr>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Sunday"
                      >
                        S
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Monday"
                      >
                        M
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Tuesday"
                      >
                        T
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Wednesday"
                      >
                        W
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Thursday"
                      >
                        Th
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Friday"
                      >
                        Fr
                      </th>
                      <th
                        className="usa-date-picker__calendar__day-of-week"
                        scope="col"
                        aria-label="Saturday"
                      >
                        S
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="23"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-23"
                          aria-label="23 February 2025 Sunday"
                          aria-selected="false"
                        >
                          23
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="24"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-24"
                          aria-label="24 February 2025 Monday"
                          aria-selected="false"
                        >
                          24
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="25"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-25"
                          aria-label="25 February 2025 Tuesday"
                          aria-selected="false"
                        >
                          25
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="26"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-26"
                          aria-label="26 February 2025 Wednesday"
                          aria-selected="false"
                        >
                          26
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="27"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-27"
                          aria-label="27 February 2025 Thursday"
                          aria-selected="false"
                        >
                          27
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                          data-day="28"
                          data-month="2"
                          data-year="2025"
                          data-value="2025-02-28"
                          aria-label="28 February 2025 Friday"
                          aria-selected="false"
                        >
                          28
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="1"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-01"
                          aria-label="1 March 2025 Saturday"
                          aria-selected="false"
                        >
                          1
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="2"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-02"
                          aria-label="2 March 2025 Sunday"
                          aria-selected="false"
                        >
                          2
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="3"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-03"
                          aria-label="3 March 2025 Monday"
                          aria-selected="false"
                        >
                          3
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="4"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-04"
                          aria-label="4 March 2025 Tuesday"
                          aria-selected="false"
                        >
                          4
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="5"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-05"
                          aria-label="5 March 2025 Wednesday"
                          aria-selected="false"
                        >
                          5
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="6"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-06"
                          aria-label="6 March 2025 Thursday"
                          aria-selected="false"
                        >
                          6
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month usa-date-picker__calendar__date--today"
                          data-day="7"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-07"
                          aria-label="7 March 2025 Friday"
                          aria-selected="false"
                        >
                          7
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="8"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-08"
                          aria-label="8 March 2025 Saturday"
                          aria-selected="false"
                        >
                          8
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="9"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-09"
                          aria-label="9 March 2025 Sunday"
                          aria-selected="false"
                        >
                          9
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="10"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-10"
                          aria-label="10 March 2025 Monday"
                          aria-selected="false"
                        >
                          10
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="11"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-11"
                          aria-label="11 March 2025 Tuesday"
                          aria-selected="false"
                        >
                          11
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="12"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-12"
                          aria-label="12 March 2025 Wednesday"
                          aria-selected="false"
                        >
                          12
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="13"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-13"
                          aria-label="13 March 2025 Thursday"
                          aria-selected="false"
                        >
                          13
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="14"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-14"
                          aria-label="14 March 2025 Friday"
                          aria-selected="false"
                        >
                          14
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="15"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-15"
                          aria-label="15 March 2025 Saturday"
                          aria-selected="false"
                        >
                          15
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="16"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-16"
                          aria-label="16 March 2025 Sunday"
                          aria-selected="false"
                        >
                          16
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="17"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-17"
                          aria-label="17 March 2025 Monday"
                          aria-selected="false"
                        >
                          17
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="18"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-18"
                          aria-label="18 March 2025 Tuesday"
                          aria-selected="false"
                        >
                          18
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="19"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-19"
                          aria-label="19 March 2025 Wednesday"
                          aria-selected="false"
                        >
                          19
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="20"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-20"
                          aria-label="20 March 2025 Thursday"
                          aria-selected="false"
                        >
                          20
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={0}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month usa-date-picker__calendar__date--selected usa-date-picker__calendar__date--focused"
                          data-day="21"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-21"
                          aria-label="21 March 2025 Friday"
                          aria-selected="true"
                        >
                          21
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="22"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-22"
                          aria-label="22 March 2025 Saturday"
                          aria-selected="false"
                        >
                          22
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="23"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-23"
                          aria-label="23 March 2025 Sunday"
                          aria-selected="false"
                        >
                          23
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="24"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-24"
                          aria-label="24 March 2025 Monday"
                          aria-selected="false"
                        >
                          24
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="25"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-25"
                          aria-label="25 March 2025 Tuesday"
                          aria-selected="false"
                        >
                          25
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="26"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-26"
                          aria-label="26 March 2025 Wednesday"
                          aria-selected="false"
                        >
                          26
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="27"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-27"
                          aria-label="27 March 2025 Thursday"
                          aria-selected="false"
                        >
                          27
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="28"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-28"
                          aria-label="28 March 2025 Friday"
                          aria-selected="false"
                        >
                          28
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="29"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-29"
                          aria-label="29 March 2025 Saturday"
                          aria-selected="false"
                        >
                          29
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="30"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-30"
                          aria-label="30 March 2025 Sunday"
                          aria-selected="false"
                        >
                          30
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                          data-day="31"
                          data-month="3"
                          data-year="2025"
                          data-value="2025-03-31"
                          aria-label="31 March 2025 Monday"
                          aria-selected="false"
                        >
                          31
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                          data-day="1"
                          data-month="4"
                          data-year="2025"
                          data-value="2025-04-01"
                          aria-label="1 April 2025 Tuesday"
                          aria-selected="false"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                          data-day="2"
                          data-month="4"
                          data-year="2025"
                          data-value="2025-04-02"
                          aria-label="2 April 2025 Wednesday"
                          aria-selected="false"
                        >
                          2
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                          data-day="3"
                          data-month="4"
                          data-year="2025"
                          data-value="2025-04-03"
                          aria-label="3 April 2025 Thursday"
                          aria-selected="false"
                        >
                          3
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                          data-day="4"
                          data-month="4"
                          data-year="2025"
                          data-value="2025-04-04"
                          aria-label="4 April 2025 Friday"
                          aria-selected="false"
                        >
                          4
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          tabIndex={-1}
                          className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                          data-day="5"
                          data-month="4"
                          data-year="2025"
                          data-value="2025-04-05"
                          aria-label="5 April 2025 Saturday"
                          aria-selected="false"
                        >
                          5
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="usa-sr-only usa-date-picker__status"
              role="status"
              aria-live="polite"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
