import React, { useState } from 'react';
import { Button } from 'theme-ui';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <Button
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </Button>
  );
};

export default Wave;
