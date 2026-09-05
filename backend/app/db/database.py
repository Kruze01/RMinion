import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import chromadb

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SQLALCHEMY_DATABASE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'copilot.db')}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ChromaDB Setup
CHROMA_DB_DIR = os.path.join(os.path.dirname(__file__), "../../chroma_data")
# Ensure the directory exists
os.makedirs(CHROMA_DB_DIR, exist_ok=True)
chroma_client = chromadb.PersistentClient(path=CHROMA_DB_DIR)

def get_chroma_client():
    return chroma_client
