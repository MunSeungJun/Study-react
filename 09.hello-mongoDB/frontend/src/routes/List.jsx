import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { getData } from '../api.js';
import { useLoaderData, Form } from 'react-router-dom';

export async function Loader() {
  return JSON.stringify(await getData());
}

// function onDelete(e) {
//   deleteData(e.target.dataset.id)
// }

const List = () => {
  const data = JSON.parse(useLoaderData());
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center fs-2 mb-3">사원</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="text-center">
                <th>사번</th>
                <th>이름</th>
                <th>이메일</th>
                <th>전화번호</th>
                <th>급여</th>
                <th>커미션</th>
                <th>관리자</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={i}>
                  <td className="text-end">{v.employee_id}</td>
                  <td>
                    {v.first_name} {v.last_name}
                  </td>
                  <td>{v.email}</td>
                  <td>{v.phone_number}</td>
                  <td className="text-end">{v.salary}</td>
                  <td className="text-end">{v.commission_pct ? v.commission_pct : '-'}</td>
                  <td className="text-end">{v.manger_id ? v.manger_id : '-'}</td>
                  <td>
                    <Form method="delete" action={v.employee_id}>
                      <button className="btn">삭제</button>
                    </Form>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default List;
