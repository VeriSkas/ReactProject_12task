import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { Routes } from '../config';

export const Routing: FC<{}> = () => useRoutes(Routes);
