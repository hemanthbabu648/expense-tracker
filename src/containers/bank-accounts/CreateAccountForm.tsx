'use client';

import { Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons-react';
import React from 'react';
import { useSelector } from 'react-redux';

import axiosInstance from '@/lib/axiosInstance';
import { showErrorToast, showSuccessToast } from '@/lib/reactToasts';
import { useAppDispatch } from '@/redux/hooks';
import { fetchUserAccounts } from '@/redux/slices/AccountSlice';
import { RootState } from '@/redux/store';
import { institutions, accountTypes } from '@/utils/AccountUtils';

import Button from '../../components/commons/Button';
import Drawer from '../../components/commons/Drawer';
import NumberInput from '../../components/commons/NumberInput';
import Select from '../../components/commons/Select';
import TextInput from '../../components/commons/TextInput';

interface CreateAccountFormProps {
  opened: boolean;
  onClose: () => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
  opened,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { userDetails } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = React.useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      accountName: '',
      institution: '',
      accountType: '',
      initialAmount: '',
    },
    validate: {
      accountName: (value) =>
        value.length >= 1 ? null : 'Account name is required',
      institution: (value) => (value ? null : 'Institution must be selected'),
      accountType: (value) => (value ? null : 'Account type is required'),
      initialAmount: (value) =>
        Number(value) >= 0
          ? null
          : 'Initial amount must be greater than or equal to zero',
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post('/accounts', {
        userId: userDetails?.id,
        accountName: values.accountName,
        institution: values.institution,
        accountType: values.accountType,
        initialAmount: values.initialAmount,
      });

      if (res?.data?.statusCode === 201) {
        showSuccessToast(res?.data?.message);
        form.reset();
      } else {
        showErrorToast(res?.data?.message);
        setLoading(false);
        return;
      }

      if (userDetails) {
        await dispatch(fetchUserAccounts(userDetails.id));
      }
      setLoading(false);
    } catch (err) {
      showErrorToast(JSON.stringify(err));
      setLoading(false);
    }
  };

  return (
    <Drawer opened={opened} onClose={onClose} title="Create New Account">
      <Alert
        variant="light"
        color="yellow"
        radius="md"
        className="my-2"
        icon={<IconAlertCircle size={18} />}
      >
        Accounts cannot be deleted once created. Please review the details
        carefully before proceeding.
      </Alert>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-5 pt-3"
      >
        {/* BANK DETAILS SECTION */}
        <div className="rounded-xl border bg-gray-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Account Details
          </h3>

          <div className="flex flex-col gap-4">
            <TextInput
              label="Account Name"
              placeholder="Eg: (SBI-XX4747, SBI-XX1234, Salary Account, Savings Account etc.)"
              required
              key={form.key('accountName')}
              {...form.getInputProps('accountName')}
            />

            <Select
              label="Institution"
              required
              data={institutions}
              key={form.key('institution')}
              {...form.getInputProps('institution')}
            />

            <Select
              label="Account Type"
              required
              data={accountTypes}
              key={form.key('accountType')}
              {...form.getInputProps('accountType')}
            />
          </div>
        </div>

        {/* AMOUNT SECTION */}
        <div className="rounded-xl border bg-gray-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Initial Balance
          </h3>
          <NumberInput
            label="Amount"
            placeholder="Enter your initial amount"
            required
            min={0}
            key={form.key('initialAmount')}
            {...form.getInputProps('initialAmount')}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-2 flex justify-end">
          <Button
            color="indigo"
            type="submit"
            loading={loading}
            className="px-6"
          >
            Create Account
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default CreateAccountForm;
