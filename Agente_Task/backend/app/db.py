"""Firestore client (Admin SDK). The backend is the only component that talks to Firebase."""
import threading

import firebase_admin
from firebase_admin import credentials, firestore

from app.config import get_settings

_client = None
_lock = threading.Lock()


def get_db():
    global _client
    if _client is None:
        with _lock:
            if _client is None:
                settings = get_settings()
                if not firebase_admin._apps:
                    cred = credentials.Certificate(settings.google_application_credentials)
                    firebase_admin.initialize_app(cred, {"projectId": settings.firebase_project_id})
                _client = firestore.client()
    return _client
