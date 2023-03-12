import React from 'react';

import { useRouter } from 'next/router';

// External Components
import { Box, Button } from '@gedesurya125/surya-ui';

//Local Components
import { NextArrow } from 'components/icon';
import { PageLink } from './PageLink';

interface PaginationBarProps {
  pageTotal: number;
  currentPage: number;
  linkPrefix: string;
}

export const PaginationBar = ({
  pageTotal,
  currentPage,
  linkPrefix,
}: PaginationBarProps) => {
  // Get the pagination button

  const router = useRouter();

  const navigate = (pageNumber: number) => {
    router.push(`${linkPrefix}${pageNumber}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        mt: '5rem',
      }}
    >
      <PrevButton
        linkPrefix={linkPrefix}
        onClick={() => navigate(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <DynamicPaginationNumber
        linkPrefix={linkPrefix}
        pageTotal={pageTotal}
        currentPage={currentPage}
      />
      <NextButton
        linkPrefix={linkPrefix}
        onClick={() => navigate(currentPage + 1)}
        disabled={currentPage === pageTotal - 1}
      />
    </Box>
  );
};

interface DynamicPaginationNumberProps extends PaginationBarProps {}

const DynamicPaginationNumber = ({
  pageTotal,
  currentPage,
  linkPrefix,
}: DynamicPaginationNumberProps) => {
  const createNumbersArray = (endNumber: number, startNumber = 1) => {
    const arrayOfNumbers = [];
    for (let i = startNumber; i <= endNumber; i++) {
      arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
  };

  const pageRadius = 2;

  let leftPageNumbers = [];
  let centerPageNumbers = [];
  let rightPageNumbers = [];

  // if page total is less than required radius display all available button
  if (pageTotal < pageRadius * 2 + 1) {
    // times by 2 because we need the right radius is equal to left radius
    const pageNumbers = createNumbersArray(pageTotal - 1);
    return (
      <ButtonGroup
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        linkPrefix={linkPrefix}
      />
    );
  }

  // Else if page total is more than required radius and currentPage is less than page radius
  if (currentPage - pageRadius <= 2) {
    leftPageNumbers = createNumbersArray(pageRadius * 2 + 1);
    rightPageNumbers = createNumbersArray(pageTotal - 1, pageTotal - 1);
    return (
      <>
        <ButtonGroup
          pageNumbers={leftPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
        <PaginationTreeDots />
        <ButtonGroup
          pageNumbers={rightPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
      </>
    );
    // else if currentPage is more than page radius and in the last number radius
  } else if (currentPage > pageTotal - 1 - pageRadius * 2) {
    leftPageNumbers = createNumbersArray(1);
    rightPageNumbers = createNumbersArray(
      pageTotal - 1,
      pageTotal - 1 - pageRadius * 2
    );
    return (
      <>
        <ButtonGroup
          pageNumbers={leftPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
        <PaginationTreeDots />

        <ButtonGroup
          pageNumbers={rightPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
      </>
    );
  } else {
    leftPageNumbers = createNumbersArray(1);
    rightPageNumbers = createNumbersArray(pageTotal - 1, pageTotal - 1);
    centerPageNumbers = createNumbersArray(
      currentPage - pageRadius <= 1
        ? currentPage + pageRadius + 1
        : currentPage + pageRadius,
      currentPage - pageRadius <= 1
        ? currentPage - (pageRadius - 1)
        : currentPage - pageRadius
    );
    return (
      <>
        <ButtonGroup
          pageNumbers={leftPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
        <PaginationTreeDots />

        <ButtonGroup
          pageNumbers={centerPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
        <PaginationTreeDots />

        <ButtonGroup
          pageNumbers={rightPageNumbers}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        />
      </>
    );
  }
};

interface NavigationButtonProps extends React.HTMLProps<HTMLButtonElement> {
  linkPrefix: string;
}

const NextButton = ({ linkPrefix, ...props }: NavigationButtonProps) => {
  return (
    <PaginationButton as="button" linkPrefix={linkPrefix} {...props}>
      <NextArrow
        sx={{
          width: '25%',
          transform: 'rotate(180deg)',
        }}
      />
    </PaginationButton>
  );
};

const PrevButton = ({ linkPrefix, ...props }: NavigationButtonProps) => {
  return (
    <PaginationButton as="button" linkPrefix={linkPrefix} {...props}>
      <NextArrow
        sx={{
          width: '25%',
        }}
      />
    </PaginationButton>
  );
};

interface ButtonGroupProps {
  pageNumbers: number[];
  currentPage?: number;
  linkPrefix?: string;
}
const ButtonGroup = ({
  pageNumbers,
  currentPage,
  linkPrefix,
}: ButtonGroupProps) => {
  return (
    <>
      {pageNumbers.map((number) => (
        <PaginationButton
          key={number}
          number={number}
          currentPage={currentPage}
          linkPrefix={linkPrefix}
        >
          {number}
        </PaginationButton>
      ))}
    </>
  );
};

interface PaginationButtonProps {
  as?: string;
  number?: number;
  children?: React.ReactNode;
  currentPage?: number;
  linkPrefix?: string;
  disabled?: boolean;
}

const PaginationButton = ({
  as,
  number,
  children,
  currentPage,
  linkPrefix,
  disabled,
  ...props
}: PaginationButtonProps) => {
  let isActive = false;

  if (number && currentPage) {
    isActive = number === currentPage;
  }

  const buttonStyle = {
    aspectRatio: '1/1',
    width: '3rem',
    display: 'flex',
    border: ({ colors }: any) =>
      `0.1rem solid ${disabled ? 'gray' : colors.primary}`,
    borderRadius: 0,
    p: 0,
    alignItems: 'center',
    justifyContent: 'center',
    '~ .pagination-button': {
      ml: '0.6rem',
    },
    fontFamily: 'primary.regular',
    cursor: disabled ? 'not-allowed' : 'pointer',

    fontSize: '90%',
    bg: isActive ? 'primary' : 'transparent',
    color: disabled ? 'gray' : isActive ? 'background' : 'primary',
    transition: 'all 0.3s ease',
    ':hover': {
      bg: disabled ? null : 'primary',
      color: disabled ? null : 'background',
    },
  };

  if (as === 'button')
    return (
      <Button
        className="pagination-button"
        sx={buttonStyle}
        disabled={disabled}
        {...props}
      >
        {children || number}
      </Button>
    );
  return (
    <PageLink
      className="pagination-button"
      to={`${linkPrefix}${number}`}
      sx={buttonStyle}
      {...props}
    >
      {children || number}
    </PageLink>
  );
};

const PaginationTreeDots = () => {
  return (
    <Box
      className="three-dots"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: '0.6rem',
      }}
    >
      <Dot />
      <Dot />
      <Dot />
    </Box>
  );
};

const Dot = () => {
  return (
    <Box
      className="dot"
      sx={{
        bg: 'white',
        width: '0.3rem',
        height: '0.3rem',
        ':not(:first-of-type)': {
          ml: '0.2rem',
        },
      }}
    />
  );
};
