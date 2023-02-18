import styled from "styled-components";

import { Link } from "react-router-dom";

import statusIcon from "./status/StatusIcon";

import format from "date-fns/format";

const InvoiceItemWrapper = styled.li`
  padding: 24px;
  width: 330px;
  height: 134px;
  background-color: ${({ theme }) => theme.colors.box};
  border-radius: 8px;
  box-shadow: 0 4px 8px 2px rgb(0, 0, 0, 0.25);

  position: relative;

  .item-id {
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colors.primaryText};

    position: absolute;
    top: 24px;
    left: 24px;

    .purple {
      color: #7e88c3;
    }
  }

  .item-name {
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colors.thirdText};
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .item-date {
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colors.thirdText};
    position: absolute;
    top: 64px;
    left: 24px;
  }

  .item-total {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: ${({ theme }) => theme.colors.primaryText};
    position: absolute;
    top: 86px;
    left: 24px;
  }

  .item-status {
    position: absolute;
    top: 68px;
    right: 24px;
  }
`;

function InvoiceItem({ id, client, date, list, status }) {
  const totalSummary = () => {
    let summary = 0;
    list.map((item) => {
      summary = summary + item.total;
    });
    return summary.toFixed(2);
  };

  return (
    <Link to={`/invoices/preview/${id}`}>
      <InvoiceItemWrapper>
        <p className="item-id">
          <span className="purple">#</span>
          {id.slice(-6)}
        </p>
        <p className="item-name">{client}</p>
        <p className="item-date">
          <span>Due </span>
          {format(new Date(date), "dd MMM yyy")}
        </p>
        <p className="item-total">
          <span>$ </span>
          {totalSummary()}
        </p>
        <div className="item-status">{statusIcon(status)}</div>
      </InvoiceItemWrapper>
    </Link>
  );
}

export default InvoiceItem;
