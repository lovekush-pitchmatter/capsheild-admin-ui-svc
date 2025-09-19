import React, { useState } from 'react';
import { ChevronLeft, UserCircle, Eye, User } from 'lucide-react';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import Button from '../components/Button'; 
import Layout from '../components/layout/Layout';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  currency: string;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

const UserDetails: React.FC = () => { 
  const [isProfileSuspended, setIsProfileSuspended] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | number>('male');
  const [selectedProfession, setSelectedProfession] = useState<string | number>('marketing_specialist');
  const [selectedCountry, setSelectedCountry] = useState<string | number>('US');
  const [selectedContactMethod, setSelectedContactMethod] = useState<string | number>('email');
  const [selectedRole, setSelectedRole] = useState<string | number>('startup_enthusiast');
  const [selectedSkills, setSelectedSkills] = useState<any[]>([
    { label: 'Project Management', value: 'project_management' },
    { label: 'Digital Marketing', value: 'digital_marketing' },
  ]);
  const [selectedInterests, setSelectedInterests] = useState<any[]>([
    { label: 'Reading', value: 'reading' },
    { label: 'Technology', value: 'technology' },
  ]);
  const [selectedNetworkingGoals, setSelectedNetworkingGoals] = useState<any[]>([
    { label: 'Gaining Industry Insights', value: 'industry_insights' },
  ]);
  const [selectedHashTags, setSelectedHashTags] = useState<any[]>([
    { label: '#Innovation', value: 'innovation' },
    { label: '#Sustainability', value: 'sustainability' },
    { label: '#RemoteWork', value: 'remote_work' },
  ]);

  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal', icon: <UserCircle size={16} strokeWidth={1.5} /> },
    { id: 'transactions', label: 'Transactions', icon: <UserCircle size={16} strokeWidth={1.5} /> },
    { id: 'investments', label: 'Investments', icon: <UserCircle size={16} strokeWidth={1.5} /> },
    { id: 'referrals', label: 'Referrals', icon: <UserCircle size={16} strokeWidth={1.5} /> },
    { id: 'activities', label: 'Activities', icon: <UserCircle size={16} strokeWidth={1.5} /> },
  ];

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const professionOptions = [
    { label: 'Marketing Specialist', value: 'marketing_specialist' },
    { label: 'Software Engineer', value: 'software_engineer' },
    { label: 'Project Manager', value: 'project_manager' },
  ];

  const countryOptions = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
  ];

  const contactMethodOptions = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
  ];

  const roleOptions = [
    { label: 'Startup Enthusiast', value: 'startup_enthusiast' },
    { label: 'Investor', value: 'investor' },
    { label: 'Mentor', value: 'mentor' },
  ];

  const skillOptions = [
    { label: 'Project Management', value: 'project_management' },
    { label: 'Digital Marketing', value: 'digital_marketing' },
    { label: 'Public Speaking', value: 'public_speaking' },
  ];

  const interestOptions = [
    { label: 'Reading', value: 'reading' },
    { label: 'Technology', value: 'technology' },
    { label: 'Music', value: 'music' },
  ];

  const networkingGoalOptions = [
    { label: 'Gaining Industry Insights', value: 'industry_insights' },
    { label: 'Finding Co-founders', value: 'co_founders' },
  ];

  const hashTagOptions = [
    { label: '#Innovation', value: 'innovation' },
    { label: '#Sustainability', value: 'sustainability' },
    { label: '#RemoteWork', value: 'remote_work' },
  ];

  const transactions: Transaction[] = [
    { id: 'TXN12345678', type: 'Investment', amount: 500.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN87654321', type: 'Withdrawal', amount: -250.00, currency: 'EUR', status: 'Pending', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN23456789', type: 'Platform Fee', amount: -15.00, currency: 'INR', status: 'Failed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Reward', amount: 50.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Refund', amount: 300.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Success Fee', amount: -25.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Bonus Credit', amount: 100.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Deposit', amount: 1000.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Repayment', amount: -400.00, currency: 'USD', status: 'Pending', date: 'Oct 30, 2024, 08:30 AM' },
    { id: 'TXN12345678', type: 'Transaction Adjustment', amount: 20.00, currency: 'USD', status: 'Completed', date: 'Oct 30, 2024, 08:30 AM' },
  ];

  return (
   < Layout>
    <div className="user-details-page pb-20">
      <div className="user-details-header">
        <div className="user-title-section">
          <h1 className="mb-2">User / <span className="user-name-purple">Jane Montgomery</span></h1>
          <p className="user-meta space-x-2">
            <span>User ID: UID13686</span>
            <span>Email: Verified</span>
            <span>Account Status: Active</span>
          </p>
        </div>
        <Button variant="secondary" onClick={() => console.log('Back button clicked')}>
          <ChevronLeft size={16} /> Back
        </Button>
      </div>

      <div className="user-details-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
        <div
          className="cursor-pointer"
          style={{
            position: 'absolute',
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <User size={20} className="text-gray-500" />
        </div>
      </div>

      {activeTab === 'personal' && (
        <div className="personal-info-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            <p className="section-description">
              Basic info, like name and address etc that used on platform.
            </p>
          </div>

          <div className="profile-visibility">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="suspend-profile"
                checked={isProfileSuspended}
                onChange={() => setIsProfileSuspended(!isProfileSuspended)}
              />
              <label htmlFor="suspend-profile" className="slider"></label>
            </div>
            <span>Suspend the profile</span>
          </div>

          <div className="form-grid">
            <Input label="Account ID" placeholder="7830144492" disabled />
            <Input label="Username/Screen Name" placeholder="jameswilliam" />
            <Input label="First Name" placeholder="James" />
            <Input label="Last Name" placeholder="Jenny William" />
            <Input label="Referral Code" placeholder="james123" />
            <div className="form-field-group">
              <label className="input-label">Phone Number</label>
              <div className="phone-input-container flex gap-2">
                <Dropdown
                  options={[{ label: '+1', value: '1', image: '/assets/images/USflag.png' }]}
                  onSelect={(option) => console.log(option)}
                  placeholder="+1"
                  value="+1"
                  label={undefined}
                />
                <Input placeholder="(607) 279 7865" />
              </div>
            </div>
            <Input label="Email Address" placeholder="jameswilliam@gmail.com" />
            <Input label="Date of Birth" type="date" placeholder="October 12, 1990" />
            <Dropdown
              label="Gender"
              options={genderOptions}
              onSelect={(option) => setSelectedGender((option as any).value)}
              placeholder="Male"
              value={selectedGender}
            />
            <Dropdown
              label="Key Skills/Expertise"
              options={skillOptions}
              onSelect={(selected) => setSelectedSkills(selected as any[])}
              placeholder="Select Skills"
              isMultiSelect
              value={selectedSkills.map(s => s.value)}
            />
            <Dropdown
              label="Your Profession"
              options={professionOptions}
              onSelect={(option) => setSelectedProfession((option as any).value)}
              placeholder="Marketing Specialist"
              value={selectedProfession}
            />
            <Input label="Address" placeholder="Apartment 4B, Baker Complex" />
            <Input label="Street" placeholder="123 Main Street" />
            <Input label="State/Region" placeholder="Illinois" />
            <Input label="Pin/Postal Code" placeholder="62704" />
            <Dropdown
              label="Country"
              options={countryOptions}
              onSelect={(option) => setSelectedCountry((option as any).value)}
              placeholder="United States"
              value={selectedCountry}
            />
            <Dropdown
              label="Preferred Contact Method"
              options={contactMethodOptions}
              onSelect={(option) => setSelectedContactMethod((option as any).value)}
              placeholder="Email"
              value={selectedContactMethod}
            />
            <Dropdown
              label="Interests/Hobbies"
              options={interestOptions}
              onSelect={(selected) => setSelectedInterests(selected as any[])}
              placeholder="Select Interests"
              isMultiSelect
              value={selectedInterests.map(i => i.value)}
            />
            <Dropdown
              label="Networking Goals"
              options={networkingGoalOptions}
              onSelect={(selected) => setSelectedNetworkingGoals(selected as any[])}
              placeholder="Gaining Industry Insights"
              isMultiSelect
              value={selectedNetworkingGoals.map(n => n.value)}
            />
            <Dropdown
              label="Role"
              options={roleOptions}
              onSelect={(option) => setSelectedRole((option as any).value)}
              placeholder="Startup Enthusiast"
              value={selectedRole}
            />
            <div className="full-width-field">
              <label className="input-label">Add Your Bio</label>
              <textarea
                className="textarea-input"
                rows={4}
                placeholder="A passionate digital marketer with over 5 years of experience in developing innovative marketing strategies for startups. Enthusiastic about public speaking and leadership in digital transformation. Dedicated to helping businesses grow and scale through data-driven marketing campaigns."
              ></textarea>
            </div>
            <Input label="Tagline/Slogan" placeholder="Driven by Passion, Focused on Growth" />
            <Dropdown
              label="Hash Tags"
              options={hashTagOptions}
              onSelect={(selected) => setSelectedHashTags(selected as any[])}
              placeholder="Select Hashtags"
              isMultiSelect
              value={selectedHashTags.map(h => h.value)}
            />
          </div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="transactions-section">
          <div className="section-header">
            <h2>Recent Transactions</h2>
            <p className="section-description">
              All the recent transactions made by the user
            </p>
          </div>

          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'table-row-even' : ''}>
                    <td>{transaction.id}</td>
                    <td>{transaction.type}</td>
                    <td className={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                    </td>
                    <td>{transaction.currency}</td>
                    <td>
                      <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>{transaction.date}</td>
                    <td>
                      <Eye size={18} className="text-purple-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <span>Rows per page:</span>
              <Dropdown
                options={[{ label: '10', value: 10 }, { label: '20', value: 20 }, { label: '50', value: 50 }]}
                onSelect={(option) => console.log('Rows per page selected:', option)}
                placeholder="10"
                value={10}
                label={undefined}
              />
              <span>1 - 10 of 14</span>
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
   </Layout>
  );
};

export default UserDetails;
