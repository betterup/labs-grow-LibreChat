import React from 'react';
import DisplayUsernameMessages from './DisplayUsernameMessages';
import { useAuthContext } from '~/hooks';

function Account() {
  const user = useAuthContext();

  return (
    <div className="flex flex-col gap-3 p-1 text-sm text-text-primary">
      <div className="pb-3">
        <DisplayUsernameMessages />
      </div>
    </div>
  );
}

export default React.memo(Account);
