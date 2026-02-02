"use client";

import { useEffect, useState } from "react";

/**
 * Developer-only component to verify environment variable configuration
 * Shows the current state of quiz validation override
 */
export default function EnvDebugPage() {
  const [config, setConfig] = useState<{
    validationEnabled: string | undefined;
    shortExpiration: string | undefined;
    buildTime: string;
  } | null>(null);

  useEffect(() => {
    setConfig({
      validationEnabled: process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED,
      shortExpiration: process.env.NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION,
      buildTime: new Date().toISOString(),
    });
  }, []);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p>Loading environment configuration...</p>
      </div>
    );
  }

  const validationStatus =
    config.validationEnabled !== "false" ? "ENABLED ✅" : "DISABLED ❌";
  const overrideActive = config.validationEnabled !== "false" ? false : true;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Environment Variables Debug
          </h1>

          <div className="space-y-6">
            {/* Validation Status */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2 text-blue-900">
                Quiz Validation Status
              </h2>
              <p className="text-2xl font-bold text-blue-700">
                {validationStatus}
              </p>
            </div>

            {/* Override Status */}
            <div
              className={`border-l-4 ${overrideActive ? "border-green-500 bg-green-50" : "border-yellow-500 bg-yellow-50"} p-4 rounded`}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Developer Override
              </h2>
              <p
                className={`text-lg ${overrideActive ? "text-green-700" : "text-yellow-700"}`}
              >
                {overrideActive
                  ? "✅ ACTIVE - Users can access quiz multiple times"
                  : "⚠️ INACTIVE - Standard validation enforced"}
              </p>
            </div>

            {/* Environment Variables */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Variable
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-600">
                      NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      {config.validationEnabled || "undefined"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-600">
                      NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      {config.shortExpiration || "undefined"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Explanation */}
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-900">How It Works</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • <strong>undefined</strong> or <strong>not "false"</strong> →
                  Validation ENABLED (default, production behavior)
                </li>
                <li>
                  • <strong>"false"</strong> → Validation DISABLED (development
                  override active)
                </li>
                <li>
                  • Changes require dev server restart or production rebuild
                </li>
                <li>
                  • Cookie expiration: {config.shortExpiration || "1"} day(s)
                  when override active
                </li>
              </ul>
            </div>

            {/* Test URLs */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h3 className="font-semibold mb-3 text-blue-900">
                Test Quiz Pages
              </h3>
              <div className="space-y-2">
                <a
                  href="/mx/campana-quiz"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  → /mx/campana-quiz
                </a>
                <a
                  href="/mx/campana-quiz-short"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  → /mx/campana-quiz-short
                </a>
                <a
                  href="/mx/quiz-2"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  → /mx/quiz-2
                </a>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <h3 className="font-semibold mb-2 text-yellow-900">
                Change Configuration
              </h3>
              <p className="text-sm text-yellow-800 mb-2">
                To toggle the override:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-800">
                <li>
                  Edit <code className="bg-yellow-100 px-1">.env.local</code>
                </li>
                <li>
                  Set{" "}
                  <code className="bg-yellow-100 px-1">
                    NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED
                  </code>{" "}
                  to <code className="bg-yellow-100 px-1">true</code> or{" "}
                  <code className="bg-yellow-100 px-1">false</code>
                </li>
                <li>
                  Restart dev server:{" "}
                  <code className="bg-yellow-100 px-1">npm run dev</code>
                </li>
                <li>Refresh this page to verify changes</li>
              </ol>
            </div>

            {/* Cookie Management */}
            <div className="bg-red-50 border border-red-200 p-4 rounded">
              <h3 className="font-semibold mb-2 text-red-900">
                Clear Quiz Cookies
              </h3>
              <p className="text-sm text-red-800 mb-3">
                If you're testing and need to clear existing cookies:
              </p>
              <button
                onClick={() => {
                  document.cookie =
                    "tf_recommender_lock=; Max-Age=0; Path=/; SameSite=Lax";
                  if (window.localStorage) {
                    window.localStorage.removeItem("tf_recommender_lock");
                  }
                  alert("Quiz cookies cleared! Reload the page to verify.");
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Clear Cookies & LocalStorage
              </button>
            </div>

            {/* Documentation Link */}
            <div className="text-center pt-4">
              <a
                href="https://github.com/juanjaragavi/topfinanzas-mx-next/blob/main/docs/QUIZ_VALIDATION_OVERRIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                📚 View Full Documentation →
              </a>
            </div>
          </div>
        </div>

        {/* Build Info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Page loaded at: {config.buildTime}
        </div>
      </div>
    </div>
  );
}
