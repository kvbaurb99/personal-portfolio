"use client";
import Image from "next/image";
import styled from "styled-components";

// Alert Components
export const AlertContainer = styled.div`
  background-color: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #166534;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const AlertDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
  margin: 2rem 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #f8fafc;
  transition: all 0.2s;
  color: #1a202c;

  &:focus {
    outline: none;
    border-color: #718096;
    box-shadow: 0 0 0 3px rgba(113, 128, 150, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #f8fafc;
  transition: all 0.2s;
  min-height: 150px;
  resize: vertical;
  color: #1a202c;

  &:focus {
    outline: none;
    border-color: #718096;
    box-shadow: 0 0 0 3px rgba(113, 128, 150, 0.2);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(31, 41, 55, 0.9);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 160px;

  &:hover {
    background-color: #2d3748;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 85, 104, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const FileInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &::-webkit-file-upload-button {
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
