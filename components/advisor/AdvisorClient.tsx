'use client';

import { useChat } from '@ai-sdk/react';

const quickPrompts = [
  'Summarize my cashflow this month',
  'Where can I cut expenses quickly?',
  'Plan a savings target for next quarter',
  'Explain my biggest outflow categories'
];

export default function AdvisorClient() {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({ api: '/api/chat' });

  function handleQuickPrompt(prompt: string) {
    setInput(prompt);
    const form = document.getElementById('advisor-chat-form') as HTMLFormElement | null;
    if (form) {
      form.requestSubmit();
    }
  }

  return (
    <section className="chat-shell">
      <div className="chip-row">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="chip"
            onClick={() => handleQuickPrompt(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="chat-window">
        {messages.length === 0 ? (
          <div className="empty-state">Start a conversation with your advisor.</div>
        ) : null}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.role}`}
          >
            <strong>{message.role === 'user' ? 'You' : 'Advisor'}</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <form
        id="advisor-chat-form"
        className="chat-input"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="Ask about budgets, goals, or upcoming payments..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="button"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}
