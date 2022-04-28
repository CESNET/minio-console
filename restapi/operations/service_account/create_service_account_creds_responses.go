// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package service_account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// CreateServiceAccountCredsCreatedCode is the HTTP code returned for type CreateServiceAccountCredsCreated
const CreateServiceAccountCredsCreatedCode int = 201

/*CreateServiceAccountCredsCreated A successful response.

swagger:response createServiceAccountCredsCreated
*/
type CreateServiceAccountCredsCreated struct {

	/*
	  In: Body
	*/
	Payload *models.ServiceAccountCreds `json:"body,omitempty"`
}

// NewCreateServiceAccountCredsCreated creates CreateServiceAccountCredsCreated with default headers values
func NewCreateServiceAccountCredsCreated() *CreateServiceAccountCredsCreated {

	return &CreateServiceAccountCredsCreated{}
}

// WithPayload adds the payload to the create service account creds created response
func (o *CreateServiceAccountCredsCreated) WithPayload(payload *models.ServiceAccountCreds) *CreateServiceAccountCredsCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account creds created response
func (o *CreateServiceAccountCredsCreated) SetPayload(payload *models.ServiceAccountCreds) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountCredsCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*CreateServiceAccountCredsDefault Generic error response.

swagger:response createServiceAccountCredsDefault
*/
type CreateServiceAccountCredsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewCreateServiceAccountCredsDefault creates CreateServiceAccountCredsDefault with default headers values
func NewCreateServiceAccountCredsDefault(code int) *CreateServiceAccountCredsDefault {
	if code <= 0 {
		code = 500
	}

	return &CreateServiceAccountCredsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the create service account creds default response
func (o *CreateServiceAccountCredsDefault) WithStatusCode(code int) *CreateServiceAccountCredsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the create service account creds default response
func (o *CreateServiceAccountCredsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the create service account creds default response
func (o *CreateServiceAccountCredsDefault) WithPayload(payload *models.Error) *CreateServiceAccountCredsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account creds default response
func (o *CreateServiceAccountCredsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountCredsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}