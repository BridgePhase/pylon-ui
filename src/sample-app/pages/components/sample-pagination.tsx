import { Pagination } from "@mantine/core";

export const SamplePaginationMantine: React.FC = () => {
  return <Pagination total={20} value={10} />;
};

export const SamplePaginationUswds: React.FC = () => {
  return (
    <nav aria-label="Pagination" className="usa-pagination">
      <ul className="usa-pagination__list">
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__link usa-pagination__previous-page"
            data-testid="pagination-previous"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="usa-icon"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
            <span className="usa-pagination__link-text">Previous</span>
          </button>
        </li>
        <li className="usa-pagination__item usa-pagination__page-no">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__button"
            data-testid="pagination-page-number"
            aria-label="Page 1"
          >
            1
          </button>
        </li>
        <li
          className="usa-pagination__item usa-pagination__overflow"
          aria-label="ellipsis indicating non-visible pages"
        >
          <span>…</span>
        </li>
        <li className="usa-pagination__item usa-pagination__page-no">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__button"
            data-testid="pagination-page-number"
            aria-label="Page 9"
          >
            9
          </button>
        </li>
        <li className="usa-pagination__item usa-pagination__page-no">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__button usa-current"
            data-testid="pagination-page-number"
            aria-label="Page 10"
            aria-current="page"
          >
            10
          </button>
        </li>
        <li className="usa-pagination__item usa-pagination__page-no">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__button"
            data-testid="pagination-page-number"
            aria-label="Page 11"
          >
            11
          </button>
        </li>
        <li
          className="usa-pagination__item usa-pagination__overflow"
          aria-label="ellipsis indicating non-visible pages"
        >
          <span>…</span>
        </li>
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            type="button"
            className="usa-button usa-button--unstyled usa-pagination__link usa-pagination__next-page"
            data-testid="pagination-next"
            aria-label="Next page"
          >
            <span className="usa-pagination__link-text">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="usa-icon"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
