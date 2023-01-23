"""empty message

Revision ID: 230bd8947c04
Revises: 51f3796d5238
Create Date: 2023-01-22 22:32:16.836640

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '230bd8947c04'
down_revision = '51f3796d5238'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('local', schema=None) as batch_op:
        batch_op.alter_column('city_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('local', schema=None) as batch_op:
        batch_op.alter_column('city_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    # ### end Alembic commands ###
