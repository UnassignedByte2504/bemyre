"""empty message

Revision ID: f0007b561f1c
Revises: e8def96cb08e
Create Date: 2023-01-19 11:13:38.555102

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0007b561f1c'
down_revision = 'e8def96cb08e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.add_column(sa.Column('local_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'local', ['local_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('local_id')

    # ### end Alembic commands ###
