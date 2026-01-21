'use client'


import { useState, useEffect } from 'react';
import { Card, Text, Badge, Group, Stack, Loader, Alert } from '@mantine/core';
import { SampleData } from '../Sample/Sample.types'

export function Sample() {
    const [SampleData, setSampleData] = useState<SampleData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSampleData = async () => {
            try {
                // Replace with your actual FastAPI endpoint URL
                const response = await fetch('/api/sample/get_sample');

                if (!response.ok) {
                    throw new Error('Failed to fetch Sample data');
                }

                const data = await response.json();
                setSampleData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
            finally {
                setLoading(false);
            }
        };

        fetchSampleData();
    }, []);

    if (loading) {
        return (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="center" py="xl">
                    <Loader size="lg" />
                </Group>
            </Card>
        );
    }

    if (error) {
        return (
            <Alert title="Error" color="red">
                {error}
            </Alert>
        );
    }

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack gap="md">
                <Group justify="space-between">
                    <Text size="xl" fw={700}>Sample Profile</Text>
                    <Badge color="blue" variant="light">Active</Badge>
                </Group>

                <Stack gap="sm">
                    <Group gap="xs">
                        <Text size="sm" c="dimmed" fw={500}>Username:</Text>
                        <Text size="sm">{SampleData?.username || 'N/A'}</Text>
                    </Group>

                    <Group gap="xs">
                        <Text size="sm" c="dimmed" fw={500}>Email:</Text>
                        <Text size="sm">{SampleData?.email || 'N/A'}</Text>
                    </Group>

                    <Group gap="xs">
                        <Text size="sm" c="dimmed" fw={500}>Full Name:</Text>
                        <Text size="sm">{SampleData?.full_name || 'Not provided'}</Text>
                    </Group>
                </Stack>
            </Stack>
        </Card>
    );
}