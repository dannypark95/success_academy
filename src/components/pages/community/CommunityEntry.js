import React from 'react';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';

const CommunityEntry = () => {
  return (
    <div>
      <Header text={'커뮤니티'} />

      <div className='container'>
        <h4>출입국 정보</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis similique consequatur nostrum soluta amet quas alias
            quod saepe animi dolor odit magni quia consequuntur, a aspernatur
            cum quisquam vel, tenetur tempore necessitatibus quidem accusamus
            at. Itaque aspernatur quod ratione non consequuntur numquam
            doloribus? Accusantium assumenda recusandae possimus repellendus,
            autem dicta!
          </div>
          <div className='page-g2'>
            <Community current={'entry'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEntry;