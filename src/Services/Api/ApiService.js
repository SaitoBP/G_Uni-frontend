// Autenticação:
import { getToken } from '../Authentication/Auth';

export const tokenHeader = {
  'Content-Type': 'application/json',
  'Authorization': getToken()
}

const api = {

  auth: async (email, password) => {

    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    }

    const response = await fetch('http://localhost:8080/auth', options);
    const data = await response.json();
    return data.token;
  },

  getOsByUo: async (uo) => {

    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() }
    }

    // Remove acentos, troca espaço por '_' e deixa em caixa alta
    let uoLink = uo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(' ', '_').toUpperCase();

    const response = await fetch(`http://localhost:8080/os?uo=${uoLink}`, options);
    const data = await response.json();
    return data.content;
  },

  verifyCnpj: async cnpj => {

    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() }
    }

    const response = await fetch(`http://localhost:8080/company/cnpj:${cnpj}`, options);
    if (response.status === 200) {
      console.log('Empresa encontrada!')
      const data = await response.json();
      return {
        content: data,
        method: 'PUT'
      };
    } else if (response.status === 404) {
      console.log('Empresa não encontrada')
      const data = { cnpj: cnpj };
      return {
        content: data,
        method: 'POST'
      };
    } else {
      console.log('Outro erro!')
    }
  },

  postOs: async (_company, _os, _method) => {

    let options = {
      method: _method,
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() },
    }

    if (_method === 'POST') {

      // Posta as informações do contato:
      const contact_response = await fetch(`http://localhost:8080/contact`, {
        ...options,
        body: JSON.stringify(_company.information.contact)
      });
      const contact = await contact_response.json();

      // Posta as informações:
      const information_response = await fetch(`http://localhost:8080/information`, {
        ...options,
        body: JSON.stringify({
          employees: _company.information.employees,
          positions: _company.information.positions,
          sectors: _company.information.sectors,
          contactId: contact.id
        })
      });
      const information = await information_response.json();

      // Posta as informações do local:
      const location_response = await fetch(`http://localhost:8080/location`, {
        ...options,
        body: JSON.stringify(_company.location)
      });
      const location = await location_response.json();

      // Posta a empresa:
      const company_response = await fetch(`http://localhost:8080/company`, {
        ...options,
        body: JSON.stringify({
          companyName: _company.companyName,
          cnpj: _company.cnpj,
          cnae: _company.cnae,
          locationId: location.id,
          informationId: information.id
        })
      });
      const company = await company_response.json();

      // Posta a OS:
      const os_response = await fetch(`http://localhost:8080/os`, {
        ...options,
        body: JSON.stringify({
          osNumber: _os.osNumber,
          osEmissionDate: _os.emissionDate,
          osValidityDate: _os.validityDate,
          uo: _os.uo,
          companyId: company.id
        })
      });
      const os = await os_response.json();
      console.log(os);
    } else {

      // Atualiza as informações do contato:
      const contact_response = await fetch(`http://localhost:8080/contact/id:${_company.information.contact.id}`, {
        ...options,
        body: JSON.stringify(_company.information.contact)
      });
      const contact = await contact_response.json();

      // Atualiza as informações:
      const information_response = await fetch(`http://localhost:8080/information/id:${_company.information.id}`, {
        ...options,
        body: JSON.stringify({
          employees: _company.information.employees,
          positions: _company.information.positions,
          sectors: _company.information.sectors,
          contactId: contact.id
        })
      });
      const information = await information_response.json();

      // Atualiza as informações do local:
      const location_response = await fetch(`http://localhost:8080/location/id:${_company.location.id}`, {
        ...options,
        body: JSON.stringify(_company.location)
      });
      const location = await location_response.json();

      // Posta a empresa:
      const company_response = await fetch(`http://localhost:8080/company/id:${_company.id}`, {
        ...options,
        body: JSON.stringify({
          companyName: _company.companyName,
          cnpj: _company.cnpj,
          cnae: _company.cnae,
          locationId: location.id,
          informationId: information.id
        })
      });
      const company = await company_response.json();
      console.log(company)

      // Posta a OS:
      const os_response = await fetch(`http://localhost:8080/os`, {
        ...options,
        method: 'POST',
        body: JSON.stringify({
          osNumber: _os.osNumber,
          osEmissionDate: _os.emissionDate,
          osValidityDate: _os.validityDate,
          uo: _os.uo,
          companyId: company.id
        })
      });
      const os = await os_response.json();
      console.log(os);
    }
  },

  getOsById: async id => {

    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() }
    }

    const osById_response = await fetch(`http://localhost:8080/os/id:${id}`, options);
    const osById = await osById_response.json();

    return osById;

  },

  postDocument: async (_documentType, osById) => {

    let options = {
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() },
    }

    const document_response = await fetch('http://localhost:8080/document', {
      ...options,
      method: 'POST',
      body: JSON.stringify({
        docType: _documentType
      })
    });
    const document = await document_response.json();

    let id = osById.documents.map(document => document.id);

    const os_response = await fetch(`http://localhost:8080/os/id:${osById.id}`, {
      ...options,
      method: 'PUT',
      body: JSON.stringify({
        documentsId: [...id, document.id]
      })
    });
    const os = await os_response.json()
    return os;
  },

  updateOs: async (_osById) => {

    let options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': getToken() },
    }

    // Atualiza as informações dos documentos:
    _osById.documents.forEach(async function (document) {
      await fetch(`http://localhost:8080/document/id:${document.id}`, {
        ...options,
        body: JSON.stringify({
          auxiliar: document.auxiliar
        })
      })
    })

    let id = _osById.documents.map(document => document.id);

    const osById_response = await fetch(`http://localhost:8080/os/id:${_osById.id}`, {
      ...options,
      body: JSON.stringify({
        documentsId: id
      })
    })
    const osById = await osById_response.json();
    return osById
  }

}

export default api;