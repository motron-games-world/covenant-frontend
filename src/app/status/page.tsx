import type { Metadata } from 'next';
import StatusClient from './StatusClient';

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Live health of the Covenant API, Soroban RPC and escrow contract.',
};

export default function StatusPage() {
  return <StatusClient />;
}
