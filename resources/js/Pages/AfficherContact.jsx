import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';

const AfficherContact = ({ contacts: initialContacts }) => {
  // State for contacts (assuming you might want to filter or sort later)
  const [contacts, setContacts] = useState(initialContacts || []);
  const [searchTerm, setSearchTerm] = useState('');

  // Handler for search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (initialContacts) {
      const filtered = initialContacts.filter(contact => 
        contact.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        contact.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        contact.message.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setContacts(filtered);
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <AuthenticatedLayout>

    <div className="contacts-page">
      <div className="contacts-header">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion des Contacts</h1>
        
        <div className="search-filter-section mb-4">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un contact..."
              className="ml-2 outline-none flex-grow"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="contacts-table-container bg-white rounded-lg shadow-lg overflow-hidden">
        {contacts && contacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date de création</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600">{contact.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500 max-w-xs truncate">{contact.message}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(contact.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="mt-4 text-lg font-medium text-gray-500">Aucun contact disponible</p>
            <p className="mt-2 text-sm text-gray-400">Les contacts que vous ajoutez apparaîtront ici.</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-gray-500 text-xs">
        <p>Total: {contacts.length} contact(s)</p>
      </div>
    </div>

    </AuthenticatedLayout>
  );
};

// For demo purposes, you can use this sample data
// Remove this when using real data from props
const sampleContacts = [
  {
    id: 1,
    name: "Safaa Hmidi",
    email: "safaahm41@gmail.com",
    message: "kaka",
    created_at: "2025-03-05T00:18:04.000000Z"
  },
  // Add more sample contacts if needed
];

// Uncomment this to use sample data for testing
// export default () => <AfficherContact contacts={sampleContacts} />;

export default AfficherContact;