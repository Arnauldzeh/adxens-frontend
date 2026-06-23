import { useState, useEffect } from 'react';
import { Organization } from '@/types';
import { api } from '@/lib/api';

export function useOrganization() {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadOrganization();
  }, []);

  const loadOrganization = async () => {
    try {
      setLoading(true);
      const data = await api.organization.get();
      setOrganization(data);
      setError(null);
    } catch (err) {
      setError('Failed to load organization');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { organization, loading, error, reload: loadOrganization };
}
