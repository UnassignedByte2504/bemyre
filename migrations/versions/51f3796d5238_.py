"""empty message

Revision ID: 51f3796d5238
Revises: 982c7776f4b0
Create Date: 2023-01-21 15:45:40.392005

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '51f3796d5238'
down_revision = '982c7776f4b0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('local_music_genre',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('musicgenre_id', sa.Integer(), nullable=False),
    sa.Column('local_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['local_id'], ['local.id'], ),
    sa.ForeignKeyConstraint(['musicgenre_id'], ['music_genre.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('music_genre', schema=None) as batch_op:
        batch_op.drop_constraint('music_genre_local_id_fkey', type_='foreignkey')
        batch_op.drop_column('local_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('music_genre', schema=None) as batch_op:
        batch_op.add_column(sa.Column('local_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.create_foreign_key('music_genre_local_id_fkey', 'local', ['local_id'], ['id'])

    op.drop_table('local_music_genre')
    # ### end Alembic commands ###
