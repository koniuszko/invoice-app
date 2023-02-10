import styled from "styled-components";

import DraftBar from "../components/status/Draft";
import PaidBar from "../components/status/Paid";
import PendingBar from "../components/status/Pending";

const InvoiceItemWrapper = styled.li`
  padding: 24px;
  width: 330px;
  height: 134px;
  background-color: ${({ theme }) => theme.colors.box};
  border-radius: 8px;

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
  const statusRender = () => {
    switch (status) {
      case "draft":
        return <DraftBar />;
        break;
      case "pending":
        return <PendingBar />;
        break;

      case "paid":
        return <PaidBar />;
        break;
    }
  };

  const dateString = () => {
    const tempDate = new Date(date);
    let newDate =
      tempDate.toString().substring(8, 10) +
      " " +
      tempDate.toString().substring(4, 7) +
      " " +
      tempDate.toString().substring(10, 15);
    return newDate;
  };

  const totalSummary = () => {
    let summary = 0;
    list.map((item) => {
      summary = summary + item.total;
    });
    Math.round(summary * 100) / 100;
    return summary;
  };

  return (
    <InvoiceItemWrapper>
      <p className="item-id">
        <span className="purple">#</span>
        {id.slice(-6)}
      </p>
      <p className="item-name">{client}</p>
      <p className="item-date">
        <span>Due </span>
        {dateString()}
      </p>
      <p className="item-total">
        <span>$ </span>
        {totalSummary()}
      </p>
      <div className="item-status">{statusRender()}</div>
    </InvoiceItemWrapper>
  );
}

export default InvoiceItem;
